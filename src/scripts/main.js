'use strict';

const elementsThead = document.querySelectorAll('table');

for (const table of elementsThead) {
  const elementsTheadTr = table.querySelector('thead tr');
  const stringsTheadTh = elementsTheadTr.querySelectorAll('th');
  const cloneTheadTh = stringsTheadTh[1].cloneNode(true);

  elementsTheadTr.insertBefore(cloneTheadTh, elementsTheadTr.lastElementChild);

  const elementsTbodyTr = table.querySelectorAll('tbody tr');

  for (const row of elementsTbodyTr) {
    const stringsTbodyTd = row.querySelectorAll('td');

    if (stringsTbodyTd.length >= 2) {
      const cloneTbodyTd = stringsTbodyTd[1].cloneNode(true);

      row.insertBefore(cloneTbodyTd, row.lastElementChild);
    }
  }

  const elementsTfootTr = table.querySelector('tfoot tr');
  const stringsTfootTh = elementsTfootTr.querySelectorAll('th');
  const cloneTfootTh = stringsTfootTh[1].cloneNode(true);

  elementsTfootTr.insertBefore(cloneTfootTh, elementsTfootTr.lastElementChild);
}
