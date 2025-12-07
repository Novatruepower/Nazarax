
export const API = {
    startEndpoint: window.location.href.split(".github.io/", 2)[0] + `.github.io/${window.location.pathname}`,

    redirectToEndPoint: function(endpoint) {
        const refresh = document.createElement("meta");
        refresh.httpEquiv = "refresh";
        const url = `${this.startEndpoint}/${endpoint}/`;
        refresh.content= `0; URL=${url}`;
        const canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = url;
        document.head.appendChild(refresh);
        document.head.appendChild(canonical);
    }
}