document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.abstract, a.bibtex').forEach(function (link) {
        link.addEventListener('click', function () {
            var selector = link.classList.contains('abstract') ? '.abstract.hidden' : '.bibtex.hidden';
            var block = link.closest('.links').parentElement.querySelector(selector);
            if (block) {
                block.classList.toggle('open');
            }
        });
    });
});
