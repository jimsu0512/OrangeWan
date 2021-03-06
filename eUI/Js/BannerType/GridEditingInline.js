﻿function getRowIndex(target) {
    var tr = $(target).closest('tr.datagrid-row');
    return parseInt(tr.attr('datagrid-row-index'));
}
function editrow(target) {
    $('#bannerTypeGird').datagrid('beginEdit', getRowIndex(target));
}
function saverow(target) {
    $('#bannerTypeGird').datagrid('endEdit', getRowIndex(target));
}
function cancelrow(target) {
    $('#bannerTypeGird').datagrid('cancelEdit', getRowIndex(target));
}

function deleterow(target) {
    $.messager.confirm('确认', '您确认想要删除记录吗？', function (r) {
        if (r) {
            $.ajax({
                url: '/BannerType/Delete',
                data: { id: $('#bannerTypeGird').datagrid('getSelected').CBTypeId },
                type: 'POST',
                dataType: "json",
                success: function (data) {                    
                    if (data.success) {
                        $.messager.alert("操作成功", '操作成功');
                    } else {
                        $.messager.alert("操作失败", '操作失败');
                    }
                },
                error: function () {
                    $.messager.alert("错误", '删除失败');
                }
            })
        }
    });
}