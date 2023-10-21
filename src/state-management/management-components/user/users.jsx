import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FetchUsers} from "../../redux-toolkit/store/reducers/Action-creators";
import { usersSlice } from "../../redux-toolkit/store/reducers/userSlice";

function Users() {
    const {users} = useSelector(state=>state.usersReducer);
    const dispatch = useDispatch();
    const {AddUser, RemoveUser} = usersSlice.actions;

    return ( 
        <>
            <button className="btn btn-primary" onClick={() => dispatch(AddUser(prompt()))}>Add User</button>
            <button className="btn btn-primary" onClick={() => dispatch(FetchUsers())}>Fetch User</button>
            {users.length > 0 ?
                <div>
                    {users.map((user) =>
                        <div>
                            <h1>{user.name}    <button className="btn btn-danger" onClick={() => dispatch(RemoveUser(user.id))}>Remove User</button></h1>
                        </div>
                    )}
                </div>
                :
                <h1>No any users</h1>
            }
        </> 
    );
}

export default Users;