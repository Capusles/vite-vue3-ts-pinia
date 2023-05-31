interface IResponseType<P = {}> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}