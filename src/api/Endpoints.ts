import BaseUrl from "./BaseUrl";

interface EndpointsMap {
  GET_TAGS: string;
  GET_PROMOTIONS: string;
  GET_PROMOTIONS_BY_ID: (id: string) => string;
}

const Endpoints: EndpointsMap = {
  GET_TAGS: BaseUrl + "/tags/list",
  GET_PROMOTIONS: BaseUrl + "/promotions/list?Channel=PWA",
  GET_PROMOTIONS_BY_ID: (id: string) => BaseUrl + `/promotions?Id=${id}`,
};

export default Endpoints;
