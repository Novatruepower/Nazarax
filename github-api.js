const repositoryData = window.location.href.split(".github.io/", 2);
const connectionData = repositoryData[0].split("://", 2);

export const API = {
    repoOwner: connectionData[1],
    repoName: repositoryData[1],
    urlParams : new URLSearchParams(window.location.search),
    startEndpoint: function() {return `${connectionData[0]}://${repoOwner}.github.io/`},

    getParams: function() {
        const urlParams = this.urlParams;
        const paramsLength = urlParams.size;
        if (paramsLength < 1) 
            return "";
        
        const paramsKeys = urlParams.keys();
        let chaine = "";

        for (const key of paramsKeys) {
            chaine += `?${key}`;
            const value = urlParams.get(key);

            if (value)
                chaine += `=${value}`;
            break;
        }

        let data = paramsKeys.next();
        while (!data.done) {
            const key = data.value;
            chaine += `&${key}`;
            const value = urlParams.get(key);

            if (value) {
                chaine += `=${value}`;
            }

            data = paramsKeys.next();
        }

        return chaine;
    },

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
                this.urlParams.delete("endpoint", pathsnames[1]);
                this.redirectToUrl(`${pathsnames[0]}${pathsnames[1]}${this.getParams()}`, this.startEndpoint());
            }
        }
    }
}