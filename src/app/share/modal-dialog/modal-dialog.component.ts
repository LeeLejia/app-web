import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MeditorService} from '../../services/meditor.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnDestroy {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<Component>;
  closeEvn: Function = null;
  outsideEvn: Function = null;
  hidden = true;
  subscription: Subscription = null;
  constructor(private meditor: MeditorService, private resolver: ComponentFactoryResolver) {
    this.subscription = meditor.getObservable().subscribe(msg => {
      if (msg.id === 'modal-dialog') {
        const news = msg.body as ModalMsg;
        this.closeEvn = news.closeEvn || null;
        // 关闭弹窗
        if (news.hidden) {
          this.hidden = true;
          return;
        }
        if (news.view) {
          this.hidden = false;
          this.createComponent(news.view);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  // 创建自定义组件
  createComponent(componentType: Type<Component>) {
    this.container.clear();
    const factory: ComponentFactory<Component> =
      this.resolver.resolveComponentFactory(componentType);
    this.componentRef = this.container.createComponent(factory);
  }

  // 关闭窗口
  close() {
    if (this.closeEvn) {
      this.closeEvn();
    }
    this.hidden = true;
  }
  // 点击了非内容区
  click_outside() {
    if (this.outsideEvn) {
      this.outsideEvn();
    }else {
      this.hidden = true;
    }
  }
}
export interface ModalMsg {
  hidden: boolean;
  closeEvn: () => {};
  outsideEvn: () => {};
  view: Type<Component>;
}
