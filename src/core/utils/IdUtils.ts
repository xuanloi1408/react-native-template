const IdUtils = {
    genIdService: (id: string): string => {
        return "DV" + ('000000' + id).slice(-6);
    },

    genIdShip: (id: string): string => {
        return "SH" + ('000000' + id).slice(-6);
    },
}

export default IdUtils;
