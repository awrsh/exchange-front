
const withFieldCheck = () => (WrappedComponent: any) => {
    const WithFieldCheck = (props: any) => {
        // Get the user object from the authentication system or global state
        // const { user } = useAuthStore();
        // const hasRequiredFields = requiredFields.every((field: any) => !!user?.information?.[field]);
        if (true) {
            return <WrappedComponent {...props} />;
        } else {
            return null;
        }
    };

    return WithFieldCheck;
};

export default withFieldCheck;
