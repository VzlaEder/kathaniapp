export interface LoginResSeccesI{
    title: string,
    access_token: string,
    token_type: string,
    member:any
    expires_at:Date
}
export interface LoginResWornI{
     ok: string,
    status: number,
    title: string,
    message: string,
    motives:any,
}

export interface LoginNoConnectI{
    message: string,
    errors: any
}

