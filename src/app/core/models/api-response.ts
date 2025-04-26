export class ApiResponse<T> {
    public data: T = {} as T;
    public totalRows: number = 0;
    public isValid: boolean = false;
    public notifications: Notification[] = [];
}

export class Notification {
    public key: string;
    public value: string;
    public message: string;

    public constructor(data: any = {}) {
        if (data == null) { data = {}; }

        this.key = data.Key;
        this.value = data.Value;
        this.message = data.Message;
    }
}
