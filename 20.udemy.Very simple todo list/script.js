var li = document.querySelectorAll('li');

for (i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
            this.classList.toggle('done');
        });

        li[i].addEventListener('mouseover', function () {
            this.classList.add('selected');
        })
         li[i].addEventListener('mouseout', function () {
                 this.classList.remove('selected');
         })

}
