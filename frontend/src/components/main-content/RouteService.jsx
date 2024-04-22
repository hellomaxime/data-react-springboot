import Home from "../services/Home";

export default function RouteService({openService}) {
    return (
        <>
            {openService === "jupyterhub" && <iframe className="w-full flex-grow" src="http://dataplatform.jupyterhub.io" title="jupyterhub"/>}
            {openService === "kubernetes" && <iframe className="w-full flex-grow" src="http://127.0.0.1:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/" title="kubernetes"/>}
            {openService === "home" && <Home />}
        </>
    )
}