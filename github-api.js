export const API = {
    endpoint: `${window.location.href.split(".github.io/", 2)[0]}.github.io/`,

    redirectToEndPoint: function() {
        console.log(this.endpoint);
        if (window.location.pathname.length > 1) {
            const pathsnames = window.location.pathname.substring(1, window.location.pathname.length).split("/", 2);
            if (pathsnames.length >= 2) {
                const url = `${this.endpoint}${pathsnames[0]}${pathsnames[1]}`;
                const refresh = document.createElement("meta");
                refresh.httpEquiv = "refresh";
                refresh.content= `0; URL=${url}`;
                const canonical = document.createElement("link");
                canonical.rel = "canonical";
                canonical.href = url;
                document.head.appendChild(refresh);
                document.head.appendChild(canonical);
            }
        }
    }
}