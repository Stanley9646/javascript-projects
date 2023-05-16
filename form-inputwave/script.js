const labels = document.querySelectorAll('.form-controllabel ')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => '<span style="transition-delay:${idx*50}ms">${letter}</span>')
        .join('')
})