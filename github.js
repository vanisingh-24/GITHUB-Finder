class Github {
    constructor() {
        this.client_id = '42a8c442441b8d933a62';
        this.client_secret = 'a7d60ffdcacfe18fa8da37c407a97133a90199a3';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // Profile (api.github.com/users/wlixw)
        // Repo (api.github.users/wlixw/repos)
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        // Return the object
        return {
            profile,
            repos
        }
    }
}