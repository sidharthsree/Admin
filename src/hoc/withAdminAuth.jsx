import useAdminAuth from './../customHooks/useAdminAuth'

const WithAdminAuth=props=>{
    return useAdminAuth(props.children);
}

export default WithAdminAuth