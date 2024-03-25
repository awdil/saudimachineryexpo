<?php

use App\Http\Controllers\Front\MediaController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Admin\ConfigurationsController;
use App\Http\Controllers\Front\BlogsController;
use App\Http\Controllers\Front\HomeController;
use App\Models\Configuration;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth:sanctum', 'verified'])->prefix('admin')->group(function () {


	/*Route for configurations*/
	Route::match(['get'], '/configurations/index', [ConfigurationsController::class, 'admin_index'])->name('admin.configurations.admin_index');
	Route::match(['get', 'post'], '/configurations/add', [ConfigurationsController::class, 'admin_add'])->name('admin.configurations.admin_add');
	Route::match(['get', 'post'], '/configurations/edit/{id}', [ConfigurationsController::class, 'admin_edit'])->name('admin.configurations.admin_edit');
	Route::match(['get'], '/configurations/delete/{id}', [ConfigurationsController::class, 'admin_delete'])->name('admin.configurations.admin_delete');
	Route::match(['get'], '/configurations/view/{id?}', [ConfigurationsController::class, 'admin_view'])->name('admin.configurations.admin_view');
	Route::match(['get', 'post'], '/configurations/prefix/{prefix?}', [ConfigurationsController::class, 'admin_prefix'])->name('admin.configurations.admin_prefix');
	Route::match(['get', 'post'], '/configurations/admin_change_theme/{id?}/{value?}', [ConfigurationsController::class, 'admin_change_theme'])->name('admin.configurations.admin_change_theme');
	Route::match(['get'], '/configurations/change/{id}', [ConfigurationsController::class, 'admin_change'])->name('admin.configurations.admin_change');
	Route::match(['get'], '/configurations/moveup/{id}', [ConfigurationsController::class, 'admin_moveup'])->name('admin.configurations.admin_moveup');
	Route::match(['get'], '/configurations/movedown/{id}', [ConfigurationsController::class, 'admin_movedown'])->name('admin.configurations.admin_movedown');
	Route::match(['post'], '/configurations/save_permalink', [ConfigurationsController::class, 'save_permalink'])->name('admin.configurations.save_permalink');
	Route::match(['post'], '/configurations/upload_editor_image', [ConfigurationsController::class, 'upload_editor_image'])->name('admin.configurations.upload_editor_image');
	Route::get('/configurations/remove_image/{id}/{name}', [ConfigurationsController::class, 'remove_config_image'])->name('admin.configurations.remove_config_image');
	Route::get('configuration/image/{id}', [ConfigurationsController::class, 'previewImage'])->name('configuration.previewImage'); 
	Route::get('configuration/image-of-media/{id}', [ConfigurationsController::class, 'previewImageByMedia'])->name('configuration.previewImageByMedia');
	Route::match(['get', 'post'], 'remove-public-file-by-id/{id}', [ConfigurationsController::class, 'removePublicImage'])->name('remove-public-file-by-id.removePublicImage'); 
	Route::match(['get', 'post'], 'remove-public-file-by-model/{source}/{model}/{id}', [ConfigurationsController::class, 'removePublicMediaByModel'])->name('remove-public-file-by-model.removePublicMediaByModel'); 
});

//Route::get('configuration/image/{id}', [HomeController::class, 'publicImagePreview'])->name('configuration.publicImagePreview');
Route::controller(HomeController::class)->group(function () {
	
	try {
		if(Schema::hasTable('configurations'))
		{
			Route::get('/load-gallery', 'loadGallery')->name('load.gallery');
			Route::get('configuration/image/{id}', 'publicImagePreview')->name('configuration.publicImagePreview');
			Route::get('exhibition/image/{id}', 'exhibitionPublicImagePreview')->name('exhibition.exhibitionPublicImagePreview');
			Route::get('catalogue/image/{id}', 'catalougePublicImagePreview')->name('catalogue.catalougePublicImagePreview');
			Route::get('public-media/image/{model}/{id}', 'PublicMediaImagePreview')->name('public-media.PublicMediaImagePreview');
			Route::get('public-media-file/images/{model}/{id}/{media}', 'PublicImagePreviewByMedia')->name('public-media-file.PublicImagePreviewByMedia');
			Route::get('album/image/{id}', 'albumPublicImagePreview')->name('album.albumPublicImagePreview');
			$permalink		= Configuration::getConfig('Permalink.settings');
			$rewritereplace = config('menu.permalink_structure_rewritecode');
			$rewritecode 	= config('menu.permalink_structure');
			$link 			= str_replace( $rewritecode, $rewritereplace, $permalink );
			
			
		    $pageLink = '/{slug}';
		    Route::get('/exhibitions', 'exhibitionsList')->name('exhibitions.list');
			Route::get('/exhibitors', 'exhibitorList')->name('exhibitor.list');
			Route::get('/exhibitions/{year}', 'exhibitionDetails')->name('exhibitions.details');
			Route::get('/exhibitions/{year}/{catalogueSlug}', 'catalogueDetails')->name('catalogue.details');
			Route::get('/exhibitions/{year}/catalogues/exhibitor/{exhibitorSlug}', 'exhibitorDetails')->name('exhibitor.details');
			Route::get('/exhibitions/{year}/catalogues/exhibitor/{exhibitorSlug}/products', 'exhibitorProductDetails')->name('exhibitor.products');


		    Route::get('/category/{slug?}', 'blogcategory')->name('permalink.category_action');
			Route::get('/author/{name?}', 'author')->name('permalink.author_action');
			Route::get('/tag/{slug?}', 'blogtag')->name('permalink.blogtag_action');
			Route::get('/search', 'search')->name('permalink.search');
			Route::get('/{year}/{month?}', 'blogarchive')->name('permalink.archive_action')->where(['year' => '[0-9]{4}+','month' => '[0-9]|[0-9]{2}']);
			Route::get('/blog', 'blogslist');
			Route::get('/news-center', 'blogslist');
			Route::match(['get','post'],'/contact', 'contact')->name('front.contact');

			//Route::match(['get','post'],'/', 'all')->name('permalink.action');
		    
			Route::match(['get', 'post'], '/', 'all')->name('permalink.home_action');

		   	Route::match(['get','post'],$pageLink, 'detail')->name('permalink.page_action');
			if ($link != '/' || $_GET || $_POST ) {
		   		Route::match(['get','post'],$link, 'detail')->name('permalink.action');
				//Route::match(['get', 'post'], $link, 'detail')->name('permalink.custom_action');
			}

		}
	} catch (Exception $e) {
            
    }	

	
});