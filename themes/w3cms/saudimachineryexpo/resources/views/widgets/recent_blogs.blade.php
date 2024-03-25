<div class="widget recent-posts-entry">
    <div class="widget-title">
        <h4 class="title">{{ __('Recent Posts') }}</h4>
    </div>
    
</div>
<aside class="widget widget_latest_post widget-post-thumb">
    <div class="text-center">

    </div>
    <ul>
    @forelse($blogs as $blog)
        @php
            if($blog->visibility != 'Pu'){
                $blog_visibility = $blog->visibility == 'Pr' ? __('Private: ') : __('Protected: ') ;
            }else {
                $blog_visibility = '';
            }

        @endphp
        <li>
            <figure class="post-thumb">
                <a href="{{ DzHelper::laraBlogLink($blog->id) }}">
                    @if($blog->featured_id>0)
                    <img src="{{ route('public-media-file.PublicImagePreviewByMedia', ['model' => 'blog', 'id' => $blog->id, 'media' => $blog->featured_id]) }}" alt="{{ __('Blog Image') }}">
                    @else
                    <img src="{{ asset('images/noimage.jpg') }}" alt="{{ __('Blog Image') }}">
                    @endif
                </a>
            </figure>
            <div class="post-content">
                <h6>
                    <a href="{{ DzHelper::laraBlogLink($blog->id) }}">{{ $blog_visibility }}{{ $blog->title }}</a>
                </h6>
                <div class="entry-meta">
                    <span class="posted-on">
                        <a href="{{ DzHelper::laraBlogLink($blog->id) }}">{{ Carbon\Carbon::parse($blog->publish_on)->format('F j, Y') }}</a>
                    </span>
                </div>
            </div>
        </li>
       
        @empty
        <div class="col-md-12">{{ __('No record found.') }}</div>
        @endforelse
    </ul>
</aside>