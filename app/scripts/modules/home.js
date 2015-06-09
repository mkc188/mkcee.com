/* global m, app */
'use strict';

(function (m, app) {

  // Creating the module
  app.module('Home', {});

  // Controller
  app.module('Home').controller = function () {
    this.title = m.prop('Blog Post Title');
    this.text = m.prop('Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.');
  };

  // View
  app.module('Home').view = function (controller) {
    return m('section.container.px2.py3', [
      m('h1.mt0', [
        m('a.black[href="#"]', 'Blog')
      ]),
      m('.clearfix.mxn2', [
        m('.sm-col.sm-col-8.md-col-9.px2', [
          m('div', [
            m('h2.h3', [
              m('a.black[href="#"]', controller.title())
            ]),
            m('p', controller.text()),
            m('a[href="#"]', 'Read more')
          ])
        ]),
        m('.sm-col.sm-col-4.md-col-3.px2.sm-show', [
          m('h3.h4', 'Categories'),
          m('ul.list-reset', [
            m('li', [m('a[class=""][href="#"]', 'Bacon')]),
            m('li', [m('a[class=""][href="#"]', 'Bratwurst')]),
            m('li', [m('a[class=""][href="#"]', 'Andouille')]),
            m('li', [m('a[class=""][href="#"]', 'Pork Loin')]),
            m('li', [m('a[class=""][href="#"]', 'Corned Beef')]),
            m('li', [m('a[class=""][href="#"]', 'Pastrami')])
          ])
        ])
      ])
    ]);
  };
})(m, app);
