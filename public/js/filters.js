const filterForm = document.querySelector('.filtros-formulario');

const filtersPanel = document.querySelector('.filtros-colapsables');

if (filtersPanel) {
    const mobileViewport = window.matchMedia('(max-width: 640px)');
    const syncFiltersPanel = () => {
        filtersPanel.open = !mobileViewport.matches;
    };

    syncFiltersPanel();
    mobileViewport.addEventListener('change', syncFiltersPanel);
}

if (filterForm) {
    const products = Array.from(document.querySelectorAll('.cuadricula-productos .tarjeta'));
    const noResults = document.createElement('p');
    noResults.id = 'sin-resultados';
    noResults.textContent = 'No se encontraron productos con esos filtros.';
    noResults.hidden = true;
    document.querySelector('.cuadricula-productos').append(noResults);

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const category = filterForm.elements.categoria.value;
        const brands = Array.from(filterForm.querySelectorAll('input[name="marca"]:checked'))
            .map((checkbox) => checkbox.value);
        let visibleProducts = 0;

        products.forEach((product) => {
            const matchesCategory = category === 'todos' || product.dataset.category === category;
            const productBrands = (product.dataset.brand || '').split(' ');
            const matchesBrand = brands.length === 0 || brands.some((brand) => productBrands.includes(brand));
            const isVisible = matchesCategory && matchesBrand;

            product.hidden = !isVisible;
            visibleProducts += Number(isVisible);
        });

        noResults.hidden = visibleProducts > 0;
    });
}
