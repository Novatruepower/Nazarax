
export const API = {
    endpoint: `${window.location.href.split(".github.io/", 2)[0]}.github.io${window.location.pathname}`,

    redirectToEndPoint: function() {
        console.log(this.endpoint);
        const refresh = document.createElement("meta");
        refresh.httpEquiv = "refresh";
        const url = `${this.endpoint}`;
        refresh.content= `0; URL=${url}`;
        const canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = url;
        document.head.appendChild(refresh);
        document.head.appendChild(canonical);
    }
}