
var EditModal = new bootstrap.Modal(document.getElementById('EditBrandModal'), {});
var CreateModal = new bootstrap.Modal(document.getElementById('CreateBrandModal'), {});
var DeleteModal = new bootstrap.Modal(document.getElementById('DeleteBrandModal'), {});


var EditForm = async function (id) {
    const response = await fetch("/api/BrandAPI/" + id)
    const brand = await response.json()

    EditModal.show();
    document.getElementById("UpdateBrandNameInput").value = brand.name;
    document.getElementById("UpdateIdInput").value = brand.brandId;
};

var CreateForm = async function () {
    CreateModal.show();
};

var DeleteForm = async function (id) {
    const response = await fetch("/api/BrandAPI/" + id)
    const brand = await response.json()

    DeleteModal.show();
    document.getElementById("DeleteBrandNameInput").value = brand.name;
    document.getElementById("DeleteIdInput").value = brand.brandId;
};

document.getElementById('CreateForm').addEventListener('submit', function (event) {
    event.preventDefault()

    var brandName = document.getElementById('CreateBrandNameInput').value;

    var brandData = {
        Name: brandName
    }

    fetch('api/BrandAPI', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brandData),
    }).then(response => {
        if (!response.ok) {
            response.text().then(errorMessage => {
                // errorMessage will contain the custom message returned from the API
                console.error('Error:', errorMessage);
                // Handle the error accordingly, maybe display it to the user
                alert(errorMessage);
            });
        }
        window.location.reload();
    })
        .catch(error => console.error('Error:', error));
});

document.getElementById('EditForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var brandId = document.getElementById('UpdateIdInput').value;
    var brandName = document.getElementById('UpdateBrandNameInput').value;

    var brandData = {
        BrandId: brandId,
        Name: brandName
    };

    fetch('api/BrandAPI/' + brandId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(brandData),
    })
        .then(response => {
            if (response.ok) {
                window.location.reload();
            } else {
                alert('Error updating brand');
            }
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('DeleteForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var brandId = document.getElementById('DeleteIdInput').value;

    var brandData = {
        BrandId: brandId,
    };

    fetch('api/BrandAPI/' + brandId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(brandData),
    })
        .then(response => {
            if (!response.ok) {
                alert('Error this deleting brand, does this brand still have dependencies?');
            }
            window.location.reload();
        })
        .catch(error => console.error('Error:', error));
});