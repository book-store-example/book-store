import { Subject } from "rxjs";
class CartService {
  private _items = [];
  private _sub: Subject<any[]> = new Subject<any[]>();
  obs$ = this._sub.asObservable();

  constructor() {
    this._loadHistory();
  }

  private _saveHistory() {
    localStorage.setItem("shoppingCartContent", JSON.stringify(this._items));
  }
  private _loadHistory() {
    const stored = localStorage.getItem("shoppingCartContent");
    this._items = stored ? JSON.parse(stored) : [];
  }

  add(item) {
    if (item.id && !this.contains(item.id)) {
      this._items.push(item);
      this._sub.next([...this._items]);
      this._saveHistory();
    }
  }

  remove(id) {
    const index = this._items.findIndex((ic) => ic.id == id);
    if (index > -1) {
      this._items.splice(index, 1);
      this._sub.next([...this._items]);
      this._saveHistory();
    }
  }

  getAll() {
    return this._items;
  }

  get(id) {
    return this._items.find((ic) => ic.id == id);
  }

  contains(id) {
    return this.get(id) != undefined;
  }
}
export const cartService = new CartService();
