module.exports =`/** Declaration file generated by dts-gen */


export function init(prefix: any, etcdServiceName: any, rpcServiceName: any, protoPath: any, pkgName: any, target: any): Watcher;

export function resolve(target: any): any;

export namespace init {
    const prototype: {
    };

}

export namespace resolve {
    const prototype: {
    };

}

declare enum Opreation {
    ADD = 'ADD',
    DELETE = 'DELETE'
}

interface GrpcCallback<T> {
    (err: Error, result: T): void
}

interface Cluster {
    init: (protoPath: string, pkgName: string, etcdServiceName: string, rpcServiceName: string, servers: string[]) => void
    updatePool: (op: Opreation, addr: string) => void,
    exec: (rpcFunctionName: string, params: any, callback: GrpcCallback<any>) => void,
    // getClient: ()
}

interface Watcher {
    next: () => void,
    close: () => void,
    getClusterClient: () => Cluster
}`;