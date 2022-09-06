jQuery('.water-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active')  .toggleClass('fire');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.water' ) .toggleClass('water-active');
  });

  jQuery('.earth-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active') .toggleClass('fire');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.earth' ) .toggleClass('earth-active');
   
  });

  jQuery('.fire-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.fire' ) .toggleClass('fire-active');
   
  });

  jQuery('.gold-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active')  .toggleClass('fire');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.gold' ) .toggleClass('gold-active');
   
  });

  jQuery('.standard-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active')  .toggleClass('fire');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.standard' ) .toggleClass('standard-active');
   
  });




