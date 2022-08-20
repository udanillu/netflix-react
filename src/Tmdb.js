const API_KEY = '604f05a08890dd3564498817ab04c3d2';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais da Netflix
- Recomendados
- Em alta (top rated)
- Ação 
- Comédia
- Terror
- Romance 
- Documentários 
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList : async () => {
        return [
            /* Originais da Netflix */  
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },

            /* Recomendados */  
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },

            /* Em Alta */ 
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },

            /* Ação */ 
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },

            /* Comédia */ 
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },

            /* Terror | Horror */ 
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },

            /* Romance */ 
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },

            /* Documentários */ 
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },

    getMovieInfo: async (MovieId, type) => {
        let info = {};

        if(MovieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    default:
                        info = null;
                        break;
            }
        }

        return info;

    }

}