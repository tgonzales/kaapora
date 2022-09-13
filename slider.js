jQuery('.water-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active')  .toggleClass('fire');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.water' ) .addClass('water-active');
  });

  jQuery('.earth-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active') .toggleClass('fire');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.earth' ) .addClass('earth-active');
   
  });

  jQuery('.fire-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.fire' ) .addClass('fire-active');
   
  });

  jQuery('.gold-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active')  .toggleClass('fire');
    jQuery ('.standard' ) .removeClass('standard-active');
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.gold' ) .addClass('gold-active');
   
  });

  jQuery('.standard-trigger').on('click', function(e) {
    e.preventDefault();
    jQuery ('.fire' ) .removeClass('fire-active');
    jQuery ('.fire-active' ) .removeClass('fire-active')  .toggleClass('fire');
    jQuery ('.gold' ) .removeClass('gold-active');
    jQuery ('.earth' ) .removeClass('earth-active');
    jQuery ('.water' ) .removeClass('water-active');
    jQuery ('.standard' ) .addClass('standard-active');
   
  });




