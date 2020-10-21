export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //remove token and set to null after developing
    token: "BQDIE5IeCbL0MHG4XiprUEJVGOokFAkDSQn432YshXkt-Fq3sfd9mt-pURk6gXc9AhJ6SAx_hRcuS6Jy9Q_EzWcsZGlKWmxZULXbLbsqfcc10RsBfalPKp-iAanv678MrVMRkRcxIdH2GScI9yTYJXAa0Ms4UpuNswGvY1sGcnQTWA"
}

const reducer = (state, action) => {
console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };

            default:
                return state;
    }
}

export default reducer;