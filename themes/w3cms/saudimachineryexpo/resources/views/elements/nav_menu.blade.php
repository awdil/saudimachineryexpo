<div class="nav-wrapper">
    <div class="mob-btn-close">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="container">
        <div class="wrap-main-nav">
            <nav class="mainnav">
                <ul id="menu-primary" class="menu">
                    {{-- Dynamically generate menu items here --}}
                    @if (isset($menus))
                        @foreach ($menus as $menuitem)
                            @php
                                $active = Request::url() == $menuitem->link ? 'current-menu-item' : '';
                                $hasChildren = $menuitem->child_menu_items->isNotEmpty() ? 'menu-item-has-children' : '';
                            @endphp
                            <li class="menu-item {{ $hasChildren }} {{ $active }}">
                                <a href="{{ $menuitem->link }}" class="nav-link" {{ $menuitem->menu_target == 1 ? 'target="_blank"' : '' }}>{{ $menuitem->title }}</a>
                                @if ($menuitem->child_menu_items->isNotEmpty())
                                    <span class="menu-arrow"></span>
                                    <ul class="sub-menu">
                                        {{-- Include a back button if necessary --}}
                                        <li class="menu-toggle-back" role="menuitem"> <a href="#" class="back-btn"><i class="icon-arrow"></i>Back</a> </li>
                                        {{-- Recursive inclusion for child menu items --}}
                                        @include('elements.nav_menu', ['menus' => $menuitem->child_menu_items])
                                    </ul>
                                @endif
                            </li>
                        @endforeach
                    @endif
                </ul>
            </nav>
            <div class="wrap-social-icon">
                {{-- Your social icons and other elements here --}}
            </div>
        </div>
    </div>
</div>
