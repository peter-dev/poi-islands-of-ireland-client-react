import axios from "axios";

class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
        this.usersEndpoint = this.baseUrl + '/api/users';
        this.isAuthenticated = false;
        this.headers = {
            Authorization: ''
        };
    };

    setAuth(token) {
        this.headers.Authorization = 'Bearer ' + token;
        this.isAuthenticated = true;
    }

    clearAuth() {
        this.headers.Authorization = '';
        this.isAuthenticated = false;
    }

    async login(email, password, callback, errorcallback) {
        const user = {
            firstName: 'n/a',
            lastName: 'n/a',
            email: email,
            password: password
        };
        const postRequest = {
            method: 'post',
            url: this.usersEndpoint + '/authenticate',
            data: user,
            headers: this.headers
        };
        try {
            const response = await axios(postRequest);
            console.log('Response: ' + JSON.stringify(response.data));
            if (response.status === 201) {
                // retrieve token from payload
                this.setAuth(response.data.token);
                callback();
            }
        } catch (err) {
            const errResponse = await err.response;
            console.log('Error: ' + JSON.stringify(errResponse.data));
            errorcallback(errResponse.data.message);
        }
    }

    logout(callback) {
        this.clearAuth();
        callback();
    }

    isAuthenticate() {
        return this.isAuthenticate();
    }

}

export default new ApiService();