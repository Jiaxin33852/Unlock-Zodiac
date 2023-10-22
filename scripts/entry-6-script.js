function checkSelections() {
    const firstDropdown = document.getElementById('firstDropdown');
    const secondDropdown = document.getElementById('secondDropdown');

    const firstValue = firstDropdown.value;
    const secondValue = secondDropdown.value;

    if (firstValue === secondValue && firstValue !== "" && secondValue !== "") {
        alert('Please choose different signs to pair');
    } else if(firstValue === "" || secondValue === "") {
        alert('Please make sure you choose two signs to pair');
    } else {
        alert('Paring...');
        // 这里你可以添加提交的逻辑
    }
}