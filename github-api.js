export const API = {
    startEndpoint: `${window.location.href.split(".github.io/", 2)[0]}.github.io/`,
    urlParams : new URLSearchParams(window.location.search),

    getParams: function() {
        console.log(this.urlParams);
        if (this.urlParams.size < 1) 
            return "";
        
        const paramsEntries = this.urlParams.entries();
        let entry = paramsEntries.next();
        let chaine = "";

        if (entry) {
            if (entry[0]) {
                chaine += `?${entry[0]}`;

                if (entry[1])
                    chaine += `=${entry[1]}`;
            }
        }

        while (!entry.done) {
            entry = paramsEntries.next();
            const value = entry.value;

            if (value) {
                console.log(value);
                if (value[0]) {
                    chaine += `&${value[0]}`;

                    if (value[1])
                        chaine += `=${value[1]}`;
                }
            }
        }

        console.log(chaine);

        return chaine;
    },

    redirectToUrl: function(endpoint, startEndpoint = "") {
        const url = `${startEndpoint}${endpoint}`;
        //const refresh = document.createElement("meta");
        //refresh.httpEquiv = "refresh";
       // refresh.content= `0; URL=${url}`;
       // const canonical = document.createElement("link");
      //  canonical.rel = "canonical";
       // canonical.href = url;
       // document.head.appendChild(refresh);
        //document.head.appendChild(canonical);
    },

    redirectToRelativeEndPoint: function(endpoint) {
        this.redirectToUrl(`${endpoint}/`, "./");
    },

    redirectToFolderEndPoint: function() {
        if (window.location.pathname.length > 1) {
            const pathsnames = window.location.pathname.substring(1, window.location.pathname.length).split("/", 2);
            if (pathsnames.length >= 2) {
                this.urlParams.delete(pathsnames[1]);
                this.redirectToUrl(`${pathsnames[0]}${pathsnames[1]}${this.getParams()}`, this.startEndpoint);
            }
        }
    }
}