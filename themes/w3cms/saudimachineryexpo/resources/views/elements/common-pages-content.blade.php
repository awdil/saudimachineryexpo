@if($page->slug=='about-everest')
  
@else
<div class="main_wrapper wrapper" id="content-wrapper">
  <div class="fl-builder-content fl-builder-content-11138 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="11138">
    <div class="fl-row fl-row-full-width fl-row-bg-none fl-node-5cy2p0u6za3x fl-row-default-height fl-row-align-center" data-node="5cy2p0u6za3x">
      <section class="two_col_section  none bg-brand_color_2">
          <div class="container">
            <div class="section-space">
              <div class="two_col_wrap">
                {!! $page->content !!}
              </div>
            </div>
          </div>
        </section>
    </div>
    </div>
</div>
@endif
