<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function admin_index()
    {
        //$albums = Album::all();
        $resultQuery = Album::query();
        $albums = $resultQuery->paginate(config('Reading.nodes_per_page'));
        //return view('albums.index', compact('albums'));
        return view('admin.albums.index',compact('albums'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function admin_create()
    {
        $screenOption = config('exhibition.ScreenOption');
        return view('admin.albums.create',compact('screenOption'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function admin_store(Request $request)
    // {
    //     $data =$request->input('data');
    
    //     if (count($request->images)>0) {
    //         $album = Album::create([
    //             'title' => $data['Album']['title']
    //         ]);
    
    //         foreach ($request->file('images') as $image) {
    //             $media = $album->addMedia($image)->toMediaCollection();
    //         }
    
    //         return redirect()->route('albums.admin.index')->with('success', __('Added successfully.'));
    //     }
    
    //     return redirect()->back()->with('error', __('Something went wrong. Please try again.'));
    // }

    public function admin_store(Request $request)
    {
        $data = $request->input('data');
        
        if (count($request->images) > 0) {
            $album = Album::create([
                'title' => $data['Album']['title']
            ]);

            foreach ($request->file('images') as $image) {
                // Specify the public path where you want to store the image
                $publicPath = public_path('uploads/albums/' . $album->id);

                // Create the directory if it doesn't exist
                if (!file_exists($publicPath)) {
                    mkdir($publicPath, 0755, true);
                }

                // Move the uploaded file to the specified destination
                $image->move($publicPath, $image->getClientOriginalName());

                // Create a Media instance manually and associate it with the album
                $media = $album->addMedia($publicPath . '/' . $image->getClientOriginalName())->toMediaCollection();
            }

            return redirect()->route('albums.admin.index')->with('success', __('Added successfully.'));
        }

        return redirect()->back()->with('error', __('Something went wrong. Please try again.'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function admin_show(Album $album)
    {
        $photos = $album->getMedia();
        return view('albums.show', compact('album', 'photos'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function admin_edit($album)
    {
        $album = Album::findorFail($album);
        $media = $album->albumMedia;
        $mediaItems = $album->getMedia();
        $screenOption = config('exhibition.ScreenOption');
        return view('admin.albums.edit', compact('album', 'media', 'screenOption'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function admin_update(Request $request, $album)
    {
        $data = $request->input('data');
        
        $albumdata = Album::findorFail($album);
        
        $success = $albumdata->update([
            'title' => $data['Album']['title']
        ]);
        
        if ($request->has('images') && count($request->images) > 0) {
           
            foreach ($request->file('images') as $image) {
                // Specify the public path where you want to store the image
                $publicPath = public_path('uploads/albums/' . $albumdata->id);

                // Create the directory if it doesn't exist
                if (!file_exists($publicPath)) {
                    mkdir($publicPath, 0755, true);
                }

                // Move the uploaded file to the specified destination
                $image->move($publicPath, $image->getClientOriginalName());

                // Create a Media instance manually and associate it with the album
                $media = $albumdata->addMedia($publicPath . '/' . $image->getClientOriginalName())->toMediaCollection();
            }

            return redirect()->route('albums.admin.index')->with('success', __('Updated successfully.'));
        }
        if($success){
            return redirect()->route('albums.admin.index')->with('success', __('Updated successfully.'));
        }else{
            return redirect()->back()->with('error', __('Something went wrong. Please try again.'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function admin_destroy(Album $album)
    {
        $album->delete();

        return redirect()->back();
    }

    public function admin_upload(Request $request, Album $album)
    {
        if ($request->has('image')) {
            $album->addMedia($request->image)->toMediaCollection();
        }
        return redirect()->back();
    }

    public function admin_showImage(Album $album, $id)
    {
        $media = $album->getMedia();
        $image = $media->where('id', $id)->first();
        
        return view('albums.image-show', compact('album', 'image'));
    }

    public function admin_destroyImage(Album $album, $id)
    {
        $media = $album->getMedia();
        $image = $media->where('id', $id)->first();
        $image->delete();

        return redirect()->back();
    }
}
