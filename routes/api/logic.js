
  // This function grabs todos from the database and updates the view
  function getsavedplaces() {
    $.get("/api/favorites", function(data) {
      savedSearch = data;
      initializeRows();
    });
  }



  export default ApiRoutes;ApiRoutes.getsavedplaces()