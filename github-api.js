export const API = {
    startEndpoint: `${window.location.href.split(".github.io/", 2)[0]}.github.io/`,

    redirectToUrl: function(endpoint, startEndpoint = "") {
        const url = `${startEndpoint}${endpoint}`;
        const refresh = document.createElement("meta");
        refresh.httpEquiv = "refresh";
        refresh.content= `0; URL=${url}`;
        const canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = url;
        document.head.appendChild(refresh);
        document.head.appendChild(canonical);
    },

    redirectToRelativeEndPoint: function(endpoint) {
        this.redirectToUrl(`${endpoint}/`, "./");
    },

    redirectToFolderEndPoint: function() {
        if (window.location.pathname.length > 1) {
            const pathsnames = window.location.pathname.substring(1, window.location.pathname.length).split("/", 2);
            if (pathsnames.length >= 2) {
                this.redirectToUrl(`${pathsnames[0]}${pathsnames[1]}`, this.startEndpoint);
            }
        }
    }
}