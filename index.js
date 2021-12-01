const tbody = document.querySelector("tbody");

tbody.addEventListener('focusout', calculatePrice);

function calculatePrice() {
    const quantityRedSock = document.querySelector("#quantityRedSock").value;
    const priceRedSock = document.querySelector("#priceRedSock").value;

    const quantityBlueSock = document.querySelector("#quantityBlueSock").value;
    const priceBlueSock = document.querySelector("#priceBlueSock").value;

    const quantityСolorlessSock = document.querySelector("#quantityСolorlessSock").value;
    const priceСolorlessSock = document.querySelector("#priceСolorlessSock").value;

    const totalRedSockValue = (priceRedSock * quantityRedSock).toFixed(2);
    const totalRedSock = document.querySelector('#totalRedSock');
    totalRedSock.innerHTML = totalRedSockValue;

    const totalBlueSockValue = (priceBlueSock * quantityBlueSock).toFixed(2);
    const totalBlueSock = document.querySelector('#totalBlueSock');
    totalBlueSock.innerHTML = totalBlueSockValue;

    const totalСolorlessSockValue = (priceСolorlessSock * quantityСolorlessSock).toFixed(2);
    const totalСolorlessSock = document.querySelector('#totalСolorlessSock');
    totalСolorlessSock.innerHTML = totalСolorlessSockValue;

    const total = ((quantityRedSock * priceRedSock) + (quantityBlueSock * priceBlueSock) + (quantityСolorlessSock * priceСolorlessSock)).toFixed(2);

    document.querySelector("#orderTotal").innerHTML = total;
}


document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for (const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for (const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelector('#total').addEventListener('click', () => getSort(event));

});