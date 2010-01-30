  $ = jQuery

  // =====================
  // = mediabase domains =
  // =====================
  $("span.mediabase_domain a").each(function() {
    $(this).qtip( {
       content: '<em>Mediabase Summary:</em> Owner=King of England, Headquarters=London, England <br /> <em>Source Languages</em> = en/ar <br /> <a href="#">Mediabse Entry</a><br /> <a href=""><em>Create</em> an Arabic Wikipedia Entry</a> <br /> <a href="#">Original Article</a> <br /> <a href="#">Translation into Arabic</a>',
       position: 'topRight',
       hide: { fixed: true},
       style: { padding: '5px 15px'}
    });
  });

  // ===================
  // = unknown domains =
  // ===================

  // Use the each() method to gain access to each of the elements attributes
  $("span.unknown_domain a").each(function() {
    $(this).qtip( {
       content: '<em>There is no Mediabase entry on this source.</p> <a href="http://freebase.com">Create a Mediabase Page in Arabic or Engligh</a>.',
       position: 'topRight',
       hide: { fixed: true},
       style: { padding: '5px 15px'}
    });
  });


  // ==============
  // = editor bar =
  // ==============
  
  $('#container').prepend('<form id="editor_bar"><span>Name:<input></input></span>  <span>Language:<input></input></span>  <span>Owner:<input></input></span> </form>');
