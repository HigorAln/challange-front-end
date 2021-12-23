
export interface IReponseEnterprises {
  name: string;
  purpose: string;
  ri_number: string;
  status: string;
  id: string;
  address: {
    cep: string;
    city: string;
    district: string;
    number: string;
    state: string;
    street: string;
  }
}