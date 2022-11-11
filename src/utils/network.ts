 export interface NetworkResponse<T> {
  data: T;
}

export const fetchFromUrl = async <T>(url: string): Promise<NetworkResponse<T>> => {
  return await fetch(url)
    .then(resp => resp.json())
}
