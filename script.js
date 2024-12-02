
        document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const price = document.getElementById('price').value;

    searchProperties(city, price);
});

function searchProperties(city, price) {
    const propertiesList = document.getElementById('propertiesList');

    // Example properties (This would be fetched from a database or API in a real-world scenario)
    const properties = [
        { id: 1, name: "Modern Apartment", city: "New York", price: 3000, image: "https://via.placeholder.com/300x200" },
        { id: 2, name: "Cozy Cottage", city: "Los Angeles", price: 2000, image: "https://via.placeholder.com/300x200" },
        { id: 3, name: "Luxury Villa", city: "Miami", price: 5000, image: "https://via.placeholder.com/300x200" },
        { id: 4, name: "Urban Loft", city: "Chicago", price: 3500, image: "https://via.placeholder.com/300x200" },
        { id: 5, name: "Beachfront Property", city: "Miami", price: 4500, image: "https://via.placeholder.com/300x200" }
    ];

    // Filter properties based on user input
    const filteredProperties = properties.filter(property => {
        return (property.city.toLowerCase().includes(city.toLowerCase()) && property.price <= price);
    });

    // Clear previous results
    propertiesList.innerHTML = '';

    // Display filtered properties
    filteredProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.name}">
            <h3>${property.name}</h3>
            <p>Price: $${property.price} per month</p>
            <p>City: ${property.city}</p>
        `;
        propertiesList.appendChild(propertyCard);
    });

    // If no properties match
    if (filteredProperties.length === 0) {
        propertiesList.innerHTML = '<p>No properties found for your search criteria.</p>';
    }
}


