var vendorData = [];
var categoryData = [];
var productData = [];
var venBtn = document.getElementById("vendor-btn");
var catBtn = document.getElementById("categories");
var pBtn = document.getElementById("product");
var delBtn = document.getElementById("del-product");
var delNBtn = document.getElementById("delN-product");
var getCBtn = document.getElementById("getC-product");
var getVBtn = document.getElementById("getV-product");
var getPBtn = document.getElementById("getP-product");
var getIBtn = document.getElementById("getI-product");
var closeDialog = document.getElementById("closeDialog");
var catClose = document.getElementById("cat-close");
var pClose = document.getElementById("p-close");
var delClose = document.getElementById("del-close");
var delNClose = document.getElementById("delN-close");
var getCClose = document.getElementById("getC-close");
var getVClose = document.getElementById("getV-close");
var getPClose = document.getElementById("getP-close");
var getIClose = document.getElementById("getI-close");
var vendorBody = document.getElementById("vendor-body");
var catBody = document.getElementById("categories-body");
var venOption = document.getElementById("vendor_id");
var catOption = document.getElementById("category_id");
var productBody = document.getElementById("product-body");
var venSubmit = document.getElementById("ven-submit");
var catSubmit = document.getElementById("cat-submit");
var pSubmit = document.getElementById("p-submit");
var venForm = document.getElementById("vendor");
var catForm = document.getElementById("category");
var pForm = document.getElementById("pro");
var dialog = document.getElementById("dialog");
var Cdialog = document.getElementById("Cdialog");
var Pdialog = document.getElementById("Pdialog");
var deldialog = document.getElementById("Delete");
var delNdialog = document.getElementById("DelbyName");
var getCdialog = document.getElementById("GetbyCategory");
var getVdialog = document.getElementById("GetbyVendor");
var getIdialog = document.getElementById("GetbyID");
var getPdialog = document.getElementById("maxPrice");
var bodyWrapper = document.getElementById("body-wrapper");
var close = document.getElementsByClassName("except");
var vendor_id = document.getElementById("vendor_id");

function generateToken() {
  const randomNum = Math.random() * 9000;
  return Math.floor(1000 + randomNum);
}
venBtn.addEventListener("click", () => {
  dialog.style.display = "flex";
  dialog.show();
});
catBtn.addEventListener("click", () => {
  Cdialog.style.display = "flex";
  Cdialog.show();
});
pBtn.addEventListener("click", () => {
  venOption.innerHTML = "";
  catOption.innerHTML = "";
  var row = `<option value="" disabled selected>
             Select Vendor</option>`;
  var row2 = `<option value="" disabled selected>
             Select Category</option>`;
  venOption.innerHTML += row;
  catOption.innerHTML += row2;

  Pdialog.style.display = "flex";
  Pdialog.show();
});
delBtn.addEventListener("click", () => {
  deldialog.style.display = "flex";
  deldialog.show();
});
delNBtn.addEventListener("click", () => {
  delNdialog.style.display = "flex";
  delNdialog.show();
});
getCBtn.addEventListener("click", () => {
  getCdialog.style.display = "flex";
  getCdialog.show();
});
getVBtn.addEventListener("click", () => {
  getVdialog.style.display = "flex";
  getVdialog.show();
});
getPBtn.addEventListener("click", () => {
  getPdialog.style.display = "flex";
  getPdialog.show();
});
getIBtn.addEventListener("click", () => {
  getIdialog.style.display = "flex";
  getIdialog.show();
});

closeDialog.addEventListener("click", () => {
  dialog.style.display = "none";
  dialog.close();
});
catClose.addEventListener("click", () => {
  Cdialog.style.display = "none";
  Cdialog.close();
});
pClose.addEventListener("click", () => {
  Pdialog.style.display = "none";
  Pdialog.close();
   venOption.innerHTML = "";
   catOption.innerHTML = "";
});
delClose.addEventListener("click", () => {
  deldialog.style.display = "none";
  deldialog.close();
});
delNClose.addEventListener("click", () => {
  delNdialog.style.display = "none";
  delNdialog.close();
});
getCClose.addEventListener("click", () => {
  getCdialog.style.display = "none";
  getCdialog.close();
});
getVClose.addEventListener("click", () => {
  getVdialog.style.display = "none";
  getVdialog.close();
});
getPClose.addEventListener("click", () => {
  getPdialog.style.display = "none";
  getPdialog.close();
});
getIClose.addEventListener("click", () => {
  getIdialog.style.display = "none";
  getIdialog.close();
});

venSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  var Vname = document.getElementById("Vname").value;
  let X = Vname.toLowerCase();
  var tel = document.getElementById("tel").value;

  var identity = generateToken();
  var x = 1;
  vendorData.forEach(function (vendor, i) {
    Y = vendor.Vname.toLowerCase();
    if (X === Y) {
      x = 0;
    }
  });
  if (x == 0) {
    alert("Id already exist");
  }
  if (Vname.length > 10) {
    alert("Name length should be less than 10");
  }
  if (!Vname) {
    alert("Name can't be blank");
  }
  if (tel.length > 12) {
    alert("Number length should be less than 12");
  }
  if (!tel) {
    alert("Number can't be blank");
  } else {
    var vendor = {
      id: identity,
      Vname: Vname,
      tel: tel,
    };
    vendorData.push(vendor);
  }
  displayVendor();
  dialog.style.display = "none";
  dialog.close();
  venForm.reset();
});

catSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  var Cname = document.getElementById("Cname").value;
  let X = Cname.toLowerCase();
  var statusRadios = document.getElementsByName("status");
  var status_value;

  for (var i = 0; i < statusRadios.length; i++) {
    if (statusRadios[i].checked) {
      status_value = statusRadios[i].value;
      break;
    }
  }
  var identity = generateToken();
  var x = 1;
  let Y;
  categoryData.forEach(function (category, i) {
    Y = category.Cname.toLowerCase();
    if (X === Y) {
      x = 0;
    }
  });
  if (x === 0) {
    alert("Category name already exists");
  } else if (Cname.length > 10) {
    alert("Name length should be less than 10");
  } else if (!Cname) {
    alert("Name can't be blank");
  } else if (!status_value) {
    alert("Status must be selected");
  } else {
    var category = {
      id: identity,
      Cname: Cname,
      status: status_value,
    };
    categoryData.push(category);
  }

  displayCategory();
  Cdialog.style.display = "none";
  Cdialog.close();
  catForm.reset();
});

pSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  var pname = document.getElementById("pname").value;
  var price = document.getElementById("price").value;
  var vendor_id = document.getElementById("vendor_id");
  var vendor_value = vendor_id.options[vendor_id.selectedIndex].value;
  var category_id = document.getElementById("category_id");
  var category_value = category_id.options[category_id.selectedIndex].value;

  let X = pname.toLowerCase();
  var identity = generateToken();
  var x = 1;
  let Y;
  productData.forEach(function (product, i) {
    Y = product.pname;
    if (product.id == identity) {
      x = 0;
    }
    if (X == Y) {
      x = 0;
    }
  });

  if (x === 0) {
    alert("Category Id or Name already exists");
  } else if (pname.length > 10) {
    alert("Name length should be less than 10");
  } else if (!pname) {
    alert("Name can't be blank");
  } else if (price < 0) {
    alert("Price should be a positive number.");
  } else if (!price) {
    alert("Price can't be blank");
  } else if (!vendor_value) {
    alert("vendor must be selected");
  } else if (!category_id) {
    alert("Category must be selected");
  } else {
    var product = {
      id: identity,
      pname: pname,
      price: price,
      vendor_id: vendor_value,
      category_id: category_value,
    };
    productData.push(product);
  }

  displayproduct(productData);
  Pdialog.style.display = "none";
  Pdialog.close();
  pForm.reset();
  venOption.innerHTML = "";
  catOption.innerHTML = "";



});

function displayVendor() {
  vendorBody.innerHTML = "";
  var row = "";
  for (var i = 0; i < vendorData.length; i++) {
    row =
      "<tr><td>" +
      vendorData[i].id +
      "</td>" +
      "<td>" +
      vendorData[i].Vname +
      "</td>" +
      "<td>" +
      vendorData[i].tel +
      "</td></tr>";
    vendorBody.innerHTML += row;
  }
}

function displayCategory() {
  catBody.innerHTML = "";
  var row = "";
  for (var i = 0; i < categoryData.length; i++) {
    row =
      "<tr><td>" +
      categoryData[i].id +
      "</td>" +
      "<td>" +
      categoryData[i].Cname +
      "</td>" +
      "<td>" +
      categoryData[i].status +
      "</td></tr>";
    catBody.innerHTML += row;
  }
}

function displayproduct(Data) {
  productBody.innerHTML = "";
  var row = "";
  for (var i = 0; i < Data.length; i++) {
    row =
      "<tr><td>" +
      Data[i].id +
      "</td>" +
      "<td>" +
      Data[i].pname +
      "</td>" +
      "<td>" +
      Data[i].vendor_id +
      "</td>" +
      "<td>" +
      Data[i].category_id +
      "</td>" +
      "<td>" +
      Data[i].price +
      "</td></tr>";
    productBody.innerHTML += row;
  }
}

function showvendorlist() {
  venOption.innerHTML = "";
  var row = `<option value="" disabled selected>
             Select Vendor</option>`;
  venOption.innerHTML += row;
  row = "";
  for (var i = 0; i < vendorData.length; i++) {
    row = `<option value="${vendorData[i].Vname}">
             ${vendorData[i].Vname}
           </option>`;
    venOption.innerHTML += row;
  }
}

function showcategorylist() {
  catOption.innerHTML = "";
  var row = `<option value="" disabled selected>
             Select Category</option>`;
  catOption.innerHTML += row;
  row = "";
  var row = "";
  for (var i = 0; i < categoryData.length; i++) {
    row = `<option value="${categoryData[i].Cname}">
             ${categoryData[i].Cname}
           </option>`;
    catOption.innerHTML += row;
  }
}

function deletebyId() {
  event.preventDefault();
  var find = document.getElementById("delId").value;
  let cond = productData.find((product, index) => {
    if (find == product.id) {
      productData.splice(index, 1);
      return 1;
    } else {
      return 0;
    }
  });
  displayproduct(productData);
  deldialog.style.display = "none";
  deldialog.close();
  if (cond) {
    alert("record deleted successfully");
  } else {
    alert("no index found");
  }
}

function deletebyName() {
  event.preventDefault();
  var find = document.getElementById("delName").value;
  let X = find.toLowerCase();
  let Y;
  let cond = productData.find((product, index) => {
    Y = product.pname.toLowerCase();
    if (X === Y) {
      productData.splice(index, 1);
      return 1;
    } else {
      return 0;
    }
  });
  displayproduct(productData);
  delNdialog.style.display = "none";
  delNdialog.close();
  if (cond) {
    alert("record deleted successfully");
  } else {
    alert("no item found");
  }
}

function getbyCategory() {
  event.preventDefault();
  var find = document.getElementById("getCategory").value;
  let X = find.toLowerCase();
  let filteredData = productData.filter((product) => {
    return product.category_id.toLowerCase() === X;
  });
  displayproduct(filteredData);
  getCdialog.style.display = "none";
  getCdialog.close();
}

function getbyVendor() {
  event.preventDefault();
  var find = document.getElementById("getVendor").value;
  let X = find.toLowerCase();
  let filteredData = productData.filter((product) => {
    return product.vendor_id.toLowerCase() === X;
  });
  displayproduct(filteredData);
  getVdialog.style.display = "none";
  getVdialog.close();
}
function getbyId() {
  event.preventDefault();
  var find = document.getElementById("productId").value;
  let filteredData = productData.filter((product) => {
    return parseFloat(product.id) <= find;
  });
  displayproduct(filteredData);
  getIdialog.style.display = "none";
  getIdialog.close();
}

function getmaxPrice() {
  event.preventDefault();
  var maxPrice = document.getElementById("getprice").value;
  let filteredData = productData.filter((product) => {
    return parseFloat(product.price) <= maxPrice;
  });
  displayproduct(filteredData);
  getVdialog.style.display = "none";
  getVdialog.close();
}

function refresh() {
  event.preventDefault();
  displayproduct(productData);
}
