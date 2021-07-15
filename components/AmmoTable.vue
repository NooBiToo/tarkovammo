<template>
  <div class="ammo-table">
    <div v-if="!data" class="ammo__error">
      <h1>Network error =(</h1>
    </div>

    <template v-else>
      <div class="caliber-select">
        <span
          class="caliber-select_top"
          style="display: block; position: absolute; top: 40px"
        >
          <button class="caliber clickable" @click="isHandleClick($event)">
            Show all calibers
          </button>
        </span>
        <span v-for="(items, index) in calibers" :key="index">
          <button
            :name="items.gsx$caliber.$t"
            class="caliber clickable"
            @click="isHandleClick($event)"
          >
            {{ items.gsx$caliber.$t }}
          </button>
        </span>
      </div>

      <div class="adjoined-tables">
          <div class="table-wrap">
            <sorted-table
              :values="data"
              :sort="list_caliber"
              class="main-table tablesorter"
            >
              <thead>
                <tr>
                  <th rowspan="2" scope="col" class="tal">Name</th>
                  <th class="clickable tar" rowspan="2" scope="col">
                    <sort-link name="gsx$caliber.$t">Caliber</sort-link>
                  </th>
                  <th class="tilted clickable" rowspan="2" scope="col">
                    <span>
                      <span
                        ><sort-link name="gsx$dmg.$t">Damage</sort-link></span
                      >
                    </span>
                  </th>
                  <th class="tilted clickable" rowspan="2" scope="col">
                    <span>
                      <span
                        ><sort-link name="gsx$projectile.$t">Projectile</sort-link></span
                      >
                    </span>
                  </th>
                  <th class="tilted clickable" rowspan="2" scope="col">
                    <span>
                      <span
                        ><sort-link name="gsx$armpentra.$t"
                          >Penetration</sort-link
                        ></span
                      >
                    </span>
                  </th>
                  <th class="tilted clickable" rowspan="2" scope="col">
                    <span>
                      <span
                        ><sort-link name="gsx$armdamage.$t"
                          >Armor Damage</sort-link
                        ></span
                      >
                    </span>
                  </th>
                  <th class="tilted clickable" rowspan="2" scope="col">
                    <span>
                      <span
                        ><sort-link name="gsx$bulletfrag.$t"
                          >Framentation Chance</sort-link
                        ></span
                      >
                    </span>
                  </th>
                  <th class="tilted clickable" rowspan="2" scope="col">
                    <span>
                      <span
                        ><sort-link name="gsx$speed.$t"
                          >Speed (m/s)</sort-link
                        ></span
                      >
                    </span>
                  </th>
                  <th class="tilted clickable" rowspan="2" scope="col">
                    <span>
                      <span
                        ><sort-link name="gsx$ricochet.$t"
                          >Ricochet Chance</sort-link
                        ></span
                      >
                    </span>
                  </th>
                  <th colspan="6">
                    Well Placed Shots to Kill
                  </th>
                </tr>
                <tr class="compare">
                  <th class="clickable">
                    <sort-link name="gsx$class.$t">1 Class</sort-link>
                  </th>
                  <th class="clickable">
                    <sort-link name="gsx$class_2.$t">2 Class</sort-link>
                  </th>
                  <th class="clickable">
                    <sort-link name="gsx$class_3.$t">3 Class</sort-link>
                  </th>
                  <th class="clickable">
                    <sort-link name="gsx$class_4.$t">4 Class</sort-link>
                  </th>
                  <th class="clickable">
                    <sort-link name="gsx$class_5.$t">5 Class</sort-link>
                  </th>
                  <th class="clickable">
                    <sort-link name="gsx$class_6.$t">6 Class</sort-link>
                  </th>
                </tr>
              </thead>
              <tbody slot="body" slot-scope="sort" class="tbody">
                <template v-for="value in sort.values">
                  <template v-if="caliber === '' || value.gsx$caliber.$t == caliber">
                    <tr :key="value.gsx$id.$t" :class="value.gsx$caliber.$t">
                      <td class="left" data-label="Name">
                        <span>{{ value.gsx$name.$t }}</span>
                      </td>
                      <td data-label="Caliber">
                        <span>{{ value.gsx$caliber.$t }}</span>
                      </td>
                      <td data-label="Damage">
                        <span>
                          <span class="val">{{ value.gsx$dmg.$t }}</span>
                        </span>
                      </td>
                      <td data-label="Projectile">
                        <span>
                          <span class="val">{{ value.gsx$projectile.$t }}</span>
                        </span>
                      </td>
                      <td data-label="Penetration">
                        <span>
                          <span class="val">{{ value.gsx$armpentra.$t }}</span>
                        </span>
                      </td>
                      <td data-label="Armor Damage">
                        <span>
                          <span class="val">{{ value.gsx$armdamage.$t }}%</span>
                        </span>
                      </td>
                      <td data-label="Framentation Chance">
                        <span>
                          <span class="val"
                            >{{ value.gsx$bulletfrag.$t }}%</span
                          >
                        </span>
                      </td>
                      <td data-label="Speed (m/s)">
                        <span>
                          <span class="val">{{ value.gsx$speed.$t }}</span>
                        </span>
                      </td>
                      <td data-label="Ricochet Chance">
                        <span>
                          <span class="val">{{ value.gsx$ricochet.$t }}%</span>
                        </span>
                      </td>
                      <td data-label="Ricochet Chance">
                        <span>
                          <span class="val">{{ value.gsx$ricochet.$t }}%</span>
                        </span>
                      </td>
                      <td
                        data-label="1 Class"
                      >
                        <span class="val">{{
                          value.gsx$class.$t
                        }}</span>
                      </td>
                      <td
                        data-label="2 Class"
                      >
                        <span class="val">{{
                          value.gsx$class_2.$t
                        }}</span>
                      </td>
                      <td
                        data-label="3 Class"
                      >
                        <span class="val">{{
                          value.gsx$class_3.$t
                        }}</span>
                      </td>
                      <td
                        data-label="4 Class"
                      >
                        <span class="val">{{ value.gsx$class_4.$t }}</span>
                      </td>
                      <td
                        data-label="5 Class"
                      >
                        <span class="val">{{ value.gsx$class_5.$t }}</span>
                      </td>
                      <td
                        data-label="6 Class"
                      >
                        <span class="val">{{ value.gsx$class_6.$t }}</span>
                      </td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </sorted-table>
          </div>
      </div>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import VueLodash from "vue-lodash";
import _ from "lodash";
import SortedTablePlugin from "vue-sorted-table";
// import Preloader from "~/components/Preloader";

Vue.use(SortedTablePlugin, VueLodash);

export default {
  name: "AmmoTable",
  components: {
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      caliber: "",
      list_caliber: "gsx$caliber.$t",
    };
  },
  computed: {
    calibers() {
      const arr = _.cloneDeep(this.data);
      const sortedArr = arr.sort(function (a, b) {
        return a.gsx$caliber.$t - b.gsx$caliber.$t;
      });
      const results = [];
      const idsSeen = {};
      const idSeenValue = {};
      for (let i = 0, len = sortedArr.length, id; i < len; ++i) {
        id = sortedArr[i].gsx$caliber.$t;
        if (idsSeen[id] !== idSeenValue) {
          results.push(sortedArr[i]);
          idsSeen[id] = idSeenValue;
        }
      }
      return results;
    },
  },
  methods: {
    isHandleClick(e) {
      if (this.caliber === e.target.name) {
        this.caliber = "";
      } else {
        this.caliber = e.target.name;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* ТАБЛИЦА */
.ammo-table {
  background-color: #0e0e0e;
  color: #aeaeb0;
  padding-bottom: 50px;
  font-size: 1.1em;
  min-height: 100vh;
}
.ammo__error {
  text-align: center;
}
.caliber-select {
  width: 35rem;
  margin: auto;
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 4em;
  position: relative;
}
.caliber {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding: 0.1rem 0.3rem;
  background: none;
  color: #aeaeb0;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 20px;
}
.caliber:hover,
.caliber:focus {
  background-color: #9a8866;
  border-radius: 3px;
  color: #000;
}
.caliber:focus {
  outline: none;
  border: 1px solid #9a8866;
  border-radius: 3px;
}
.adjoined-tables {
  user-select: text;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}
.adjoined-tables thead tr th {
  vertical-align: bottom;
}
.table-wrap {
  overflow-x: auto;
  overflow-y: auto;
  max-width: 100vw;
  padding-top: 4em;
}
.fixed-table,
.main-table {
  border: none;
  border-collapse: collapse;
  width: 1200px;
}
.tal {
  text-align: left;
}
.tar {
  text-align: right;
}
.fixed-table th {
  text-align-last: left;
  min-width: 12rem;
}
@media (max-width: 550px) {
  .ammo-table {
    margin-top: 35px;
  }
  .fixed-table th {
    min-width: 15rem;
  }
}
.main-table {
  margin-top: 6rem;
  overflow-x: scroll;
}
.armor_title {
  border-bottom: 2px solid #2d281e;
  position: relative;
  left: 5px;
}
.armor_title:nth-last-child(1) {
  left: 0;
}
.compare th {
  min-width: 3rem;
  text-align: right;
}
th.tilted {
  min-width: 4rem;
  width: 4rem;
  position: relative;
  padding-bottom: 1.7em;
}
th.tilted span {
  display: inline-block;
  margin: auto;
  border-bottom: 1px solid #030;
}
th.tilted span span {
  display: block;
  position: absolute;
  white-space: nowrap;
  transform-origin: 1rem 0;
  transform: rotate(-35deg);
}
.clickable a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.clickable a:hover {
  color: #9a8866;
}
.clickable a span {
  display: none !important;
}
th.spacer {
  width: 6rem;
  min-width: 6rem;
}
th.smallspacer {
  width: 2rem;
  min-width: 2rem;
}
.tbody td {
  text-align: right;
}
.tbody td.left {
  text-align: left;
}
table td {
  padding: 0.2rem;
}
.tbody tr:nth-child(odd) {
  background-color: #2d281e;
}
.hr-line {
  border-bottom: 2px solid #2d281e;
}
</style>
