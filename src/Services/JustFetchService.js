let justFetch = async (endpoint, postoptions) => {
  let showLoading = postoptions.showLoading;
//   if (showLoading != "false") {
//     $(".graph").html(
//       `<div class="col-md-12 text-center p-t-15">${loading_template_plain}</div>`
//     );
//   }
  if (endpoint == null || endpoint.length < 4) {
    return { error: true, type: "url", message: "Invalid endpoint URL" };
  }
  let options = postoptions || {};
  let req_method = options.method || "GET"; //PUT //POST //DELETE etc.
  let req_hd = {};
  let headers = {};
  let final_endpoint = endpoint;
  if (!window.location.hostname.includes("play.dhis2.org/")) {
    let encurl = window.encodeURIComponent(window.btoa(endpoint));
    console.log("encurl = " + encurl);
    final_endpoint = "http://localhost:5600/request/" + encurl;
    console.log("final end", final_endpoint);
  }
  req_hd.headers = headers;
  req_hd.method = req_method;
  req_hd.Accept = "application/json";

  // console.log(`justFetch: ${final_endpoint} with headers: ${JSON.stringify(req_hd)}`);
  try {
    let result = await window.fetch(final_endpoint, req_hd);
    let result_json = await result.json();
    if (result_json.status === "ERROR") {
      throw result_json;
    }
    return result_json;
  } catch (err) {
    return { error: true, msg: err.message };
  }
};

export { justFetch };
