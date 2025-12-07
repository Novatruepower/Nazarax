export const API = {
    endpoint: `${window.location.href.split(".github.io/", 2)[0]}.github.io/`,

    redirectToEndPoint: function() {
        console.log(this.endpoint);
        //const refresh = document.createElement("meta");
        //refresh.httpEquiv = "refresh";
        const url = `${this.endpoint}`;
        const pathsnames = window.location.pathname.split("/", 3);
       // refresh.content= `0; URL=${url}`;
        console.log(url);
        console.log(pathsnames);
        //const canonical = document.createElement("link");
       // canonical.rel = "canonical";
       // canonical.href = url;
       // document.head.appendChild(refresh);
       // document.head.appendChild(canonical);
    }
}