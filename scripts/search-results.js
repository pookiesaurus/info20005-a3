window.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    const categories = params.get('categories');
    const minPrice = params.get('min');
    const maxPrice = params.get('max');
    const sort = params.get('sort');
    const search = params.get('search');

    console.log('Categories:', categories);
    console.log('Min Price:', minPrice);
    console.log('Max Price:', maxPrice);
    console.log('Sort:', sort);
    console.log('Search:', search);
});