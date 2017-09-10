import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-transaction-flow',
  templateUrl: './transaction-flow.component.html',
  styleUrls: ['./transaction-flow.component.css']
})
export class TransactionFlowComponent implements AfterViewInit {

  name = 'GoJS';

  @ViewChild('myDiagramDiv')
  element: ElementRef;

  ngAfterViewInit() {
    /*(go as any).licenseK ey = "...";*/

    const $ = go.GraphObject.make;  // for conciseness in defining templates

    const myDiagram: go.Diagram = $(go.Diagram, this.element.nativeElement,
      {
        initialContentAlignment: go.Spot.Center,  // center the content
        'undoManager.isEnabled': true  // enable undo & redo
      });

    // define a simple Node template
    myDiagram.nodeTemplate =
      $(go.Node, 'Auto',  // the Shape will go around the TextBlock
        $(go.Shape, 'RoundedRectangle', { strokeWidth: 0 },
          // Shape.fill is bound to Node.data.color
          new go.Binding('fill', 'color')),
        $(go.TextBlock,
          { margin: 8 },  // some room around the text
          // TextBlock.text is bound to Node.data.key
          new go.Binding('text', 'key'))
      );

    // but use the default Link template, by not setting Diagram.linkTemplate

    // create the model data that will be represented by Nodes and Links
    myDiagram.model = new go.GraphLinksModel(
      [
        { key: 'Delta', color: 'pink' },
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Gamma', color: 'lightgreen' },
        { key: 'Beta', color: 'orange' }
      ],
      [
        { from: 'Alpha', to: 'Beta' },
        { from: 'Beta', to: 'Gamma' },
        { from: 'Gamma', to: 'Beta' },
        { from: 'Gamma', to: 'Delta' },
        { from: 'Delta', to: 'Alpha' },
      ]);
  }

}
