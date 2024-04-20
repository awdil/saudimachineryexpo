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
                    @if ($menus)
                        @foreach ($menus as $menuitem)
                            @php
                                $active = Request::url() == $menuitem->link ? 'current-menu-item' : '';
                                $hasChildren = $menuitem->child_menu_items->isNotEmpty() ? 'menu-item-has-children' : '';
                                $menuItemClasses = 'menu-item menu-item-type-post_type menu-item-object-page'; // Add other classes as needed
                                $menuItemClasses .= ' ' . $active;
                                $menuItemClasses .= ' ' . $hasChildren;
                            @endphp
                            <li class="{{ $menuItemClasses }}">
                            <a href="{{ $menuitem->link }}" class="nav-link">
                                @if ($menuitem->title == 'Home')  <!-- Check if the menu item's title is 'Home' -->
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                @endif
                                {{ $menuitem->title }}
                            </a>
                                @if ($menuitem->child_menu_items->isNotEmpty())
                                    <span class="menu-arrow"></span>
                                    <ul class="sub-menu">
                                        {{-- Include a back button if necessary --}}
                                        <li class="menu-toggle-back" role="menuitem"> <a href="#" class="back-btn"><i class="icon-arrow"></i>Back</a> </li>
                                        {{-- Recursive inclusion for child menu items --}}
                                        @foreach ($menuitem->child_menu_items as $child)
                                            <li class="menu-item">
                                                <a href="{{ $child->link }}" class="nav-link">{{ $child->title }}</a>
                                                {{-- Include additional sub-menus if needed --}}
                                                {{-- Recursive inclusion for nested child menu items --}}
                                                @if ($child->child_menu_items->isNotEmpty())
                                                    <ul class="sub-menu">
                                                        @foreach ($child->child_menu_items as $subChild)
                                                            <li class="menu-item">
                                                                <a href="{{ $subChild->link }}" class="nav-link">{{ $subChild->title }}</a>
                                                                {{-- Add more sub-menu levels if necessary --}}
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                            </li>
                                        @endforeach
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

