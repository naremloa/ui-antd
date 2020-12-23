<template>
  <div class="table">
    table
    <fe-table
      :columns="columns"
      :data-source="[{}]" />
  </div>
</template>
<script>
export default {
  name: 'Table',
  data() {
    const {
      ftColumn, ftText, ftTextarea, ftButton, ftSwitch, ftSelect,
    } = this.$format;
    return {
      columns: [
        ftColumn({
          dataIndex: 'age',
          title: 'Age',
          // width: 80,
        })(ftText({ text: 'aaage' })),
        ftColumn({
          dataIndex: 'address',
          title: 'Address',
          // width: 300,
        })(),
        ftColumn({
          dataIndex: 'firstName',
          title: 'FirstName',
          // width: 100,
        })(),
        ftColumn({
          dataIndex: 'lastName',
          title: 'LastName',
          // width: 100,
        })(),
        ftColumn({
          dataIndex: 'tags',
          title: 'Tags',
          // width: 100,
        })({ columnType: 'tag' }),
        ftColumn({
          dataIndex: 'action',
          title: 'Action',
          // width: 200,
          columnsStyle: { display: 'flex', justifyContent: 'space-around' },
        })(ftButton({ text: '按鈕' }), ftButton({ text: '按鈕2' })),
        ftColumn({
          dataIndex: 'switch',
          title: 'Switch',
        })(ftSwitch({
          checkedChildren: 'OK',
          unCheckedChildren: 'NO',
          beforeChange: (value, { data, rowData }) => new Promise((res) => {
            setTimeout(() => {
              res(true);
            }, 5000);
          }),
        })),
        ftColumn({
          dataIndex: 'select',
          title: 'Select',
          width: 200,
        })(ftSelect({
          defaultValue: { value: 1, label: 'A1' }.label,
          options: [{ value: 1, label: 'A1' }, { value: 2, label: 'A2' }],
          change: (row) => {
            console.log('YO', row);
          },
        })),
        ftColumn({
          dataIndex: 'textarea',
          title: 'Textarea',
        })(ftTextarea({
          placeholder: 'HI',
          defaultValue: 'DEFAULT',
        })),
      ],
    };
  },
};
</script>
