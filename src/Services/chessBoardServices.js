import axiosC from './axios-customize'



const FetchAll = () => {
    return axiosC.get("/total_data/all");
}

const FetchById = (id) => {
    return axiosC.get(`/total_data/${id}`);
}

const PostCreate = (chessBoard, turn, codeGame, player1, player2, winner) => {
    return axiosC.post("/total_data/add", { chessBoard, turn, codeGame, player1, player2, winner });
}
const PutCreate = (id) => {
    return axiosC.put(`/total_data/update/${id}`);
}

const PutUpdate = (id, chessBoard, turn, codeGame, player1, player2, winner) => {
    return axiosC.put(`/total_data/update/${id}`, { chessBoard, turn, codeGame, player1, player2, winner });
}

const Delete = (id) => {
    return axiosC.delete(`/total_data/delete/${id}`);
}

export { FetchAll, FetchById, PostCreate, PutUpdate, PutCreate, Delete };
