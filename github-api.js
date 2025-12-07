export const API = {
    endpoint: `${window.location.href.split(".github.io/", 2)[0]}.github.io/`,

    redirectToEndPoint: function() {
        console.log(this.endpoint);
        const refresh = document.createElement("meta");
        refresh.httpEquiv = "refresh";
        const url = `${this.endpoint}`;
        const pathsnames = window.location.pathname.split("/");
       // refresh.content= `0; URL=${url}${pathsnames[0]}${pathsnames[1]}`;
        console.log(window.location.pathname);
        //const canonical = document.createElement("link");
       // canonical.rel = "canonical";
       // canonical.href = url;
       // document.head.appendChild(refresh);
       // document.head.appendChild(canonical);
    }
}